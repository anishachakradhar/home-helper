from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=100,unique=True)
    description = models.CharField(max_length=250,blank=True,null=True)

    def __str__(self):
        return self.title
    

class User(AbstractUser):
    job = models.ForeignKey(Job, on_delete=models.DO_NOTHING,null=True)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateTimeField(null=True)
    mobile_number = models.CharField(max_length=10)
    address = models.CharField(max_length=150,null=True)
    latitude = models.FloatField(default=27.697796)
    longitude = models.FloatField(default=85.322128)
    search_radius = models.IntegerField(default=30)

    def __str__(self):
        return self.username
