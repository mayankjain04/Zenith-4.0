from django.urls import path
from  rest_framework.authtoken.views import obtain_auth_token
from .views import *

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(), name='api_logout'),
    path('login/', obtain_auth_token, name='login'),
]
