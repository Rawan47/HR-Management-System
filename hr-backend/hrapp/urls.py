# yourappname/urls.py
from django.urls import path
from .views import BranchListCreateView, BranchDetailsView, EmployeeListCreateView, EmployeeDetailsView

urlpatterns = [
    path('branches/', BranchListCreateView.as_view(), name='branch-list-create'),
    path('branches/<int:pk>/', BranchDetailsView.as_view(), name='branch-details'),
    path('employees/', EmployeeListCreateView.as_view(), name='employee-list-create'),
    path('employees/<int:pk>/', EmployeeDetailsView.as_view(), name='employee-details'),
]
