"""home_helper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from rest_auth.views import PasswordResetConfirmView

from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view 
# from rest_framework_swagger.views import get_swagger_view

API_TITLE = 'User helper API'
API_DESCRIPTION = 'A Web API for creating job requests'
schema_view = get_schema_view(title=API_TITLE)
# schema_view = get_swagger_view(title=API_TITLE) # new


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/rest-auth/password/reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,35})/$', PasswordResetConfirmView.as_view(),
            name='password_reset_confirm'),
    path('api/v1/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/rest-auth/', include('rest_auth.urls')),
    path('api/v1/rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('docs/', include_docs_urls(title='Blog API')),
    path('api/docs/', include_docs_urls(title=API_TITLE, description=API_DESCRIPTION)),
    path('schema/', schema_view),
    
]
