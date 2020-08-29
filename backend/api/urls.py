from django.urls import path
from .views import JobListCreateAPIView, JobDetailAPIView, UserDetailAPIView, UserSearchAPIView

urlpatterns = [
    path("jobs/", JobListCreateAPIView.as_view(), name="list_job"),
    path("jobs/<int:pk>/", JobDetailAPIView.as_view(), name="detail_job"),
    path("users/", UserSearchAPIView.as_view(), name="search_user"),
    path("users/<int:pk>/", UserDetailAPIView.as_view(), name="detail_user"),
]
