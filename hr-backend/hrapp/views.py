from django.shortcuts import render


from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Branch, Employee
from .serializers import BranchSerializer, EmployeeSerializer

class BranchListCreateView(generics.ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

class BranchDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

    def perform_destroy(self, instance):
        
        instance.employees.all().delete()
        super().perform_destroy(instance)

class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class EmployeeDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def perform_destroy(self, instance):
       
        if instance.branch.manager == instance:
           
            instance.branch.manager = None
            instance.branch.save()
        super().perform_destroy(instance)
