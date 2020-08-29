from rest_framework import serializers
from django.contrib.auth import get_user_model

from accounts.models import Job
from .extra_modules import calc_dist

User = get_user_model()

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ('id','title', 'description')

class UserSerializer(serializers.ModelSerializer):
    distance = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id','first_name','last_name','mobile_number','email','job','latitude','longitude','distance')

    # def get_serializer_context(self):
    #     """
    #     Extra context provided to the serializer class.
    #     """
    #     return {
    #         'request': self.request, # request object is passed here
    #         'format': self.format_kwarg,
    #         'view': self
    #     }

    def get_distance(self,obj):
        user = self.context['request'].user
        return round(calc_dist(user.latitude,user.longitude,obj.latitude,obj.longitude)/1000,3)
        