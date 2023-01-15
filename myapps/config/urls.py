from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='datatable/table.html'), name='table'),
    path('datatable/', include('datatable.urls')),
    path('admin/', admin.site.urls),
]
