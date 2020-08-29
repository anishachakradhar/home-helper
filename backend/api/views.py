from rest_framework import generics, permissions, filters, response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.auth import get_user_model
# Create your views here.


from accounts.models import Job

from .serializers import JobSerializer, UserSerializer
from .permissions import IsCurrentUserOrReadOnly
from .extra_modules import calc_dist

User = get_user_model()

class JobListCreateAPIView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobDetailAPIView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class UserDetailAPIView(generics.RetrieveUpdateAPIView):
    permission_classes = (IsCurrentUserOrReadOnly,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class UserSearchAPIView(generics.ListAPIView):
#     search_fields = ['job__title']
#     filter_backends = [filters.SearchFilter]
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class UserSearchAPIView(APIView):

    serializer_class = UserSerializer

    def get(self, request):
        
        users = User.objects.all()
        user_ids = []
        for user in users:
            distance = calc_dist(request.user.latitude,request.user.longitude, user.latitude, user.longitude)
            if abs(distance) < (request.GET.get('search_radius',35) *1000 ):
                user_ids.append(user.id)
        users = users.filter(id__in=user_ids).exclude(id=request.user.id)
        if 'search' in request.GET:
            users = users.filter(job__title__icontains=request.GET.get('search'))
            
        data = self.serializer_class(users,context={'request':request},many=True).data
        return response.Response(data)


