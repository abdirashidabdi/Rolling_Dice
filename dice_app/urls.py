from django.conf.urls import url
from django.contrib import admin
from django.urls import path, re_path, include

from dice_app import views
from dice_app.views import index

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^admin/', admin.site.urls),
    url(r'^dicepage/', views.index, name='index')
]
