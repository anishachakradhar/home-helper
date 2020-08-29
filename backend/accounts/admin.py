from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserChangeForm, CustomUserCreationForm
from .models import Job
# Register your models here.

User = get_user_model()

class CustomUserAdmin(UserAdmin):
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm

    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'classes': ('wide',),
            'fields': ('email','mobile_number','date_of_birth','job')
        }
    ),)

    custom_fieldsets = UserAdmin.fieldsets
    custom_fieldsets[1][1]['fields'] += ('mobile_number','date_of_birth','job','latitude','longitude')
    fieldsets = custom_fieldsets


    list_display = ['email','username','mobile_number']


admin.site.register(User, CustomUserAdmin)
admin.site.register(Job)
