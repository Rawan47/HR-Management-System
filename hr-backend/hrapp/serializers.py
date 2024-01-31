# yourappname/serializers.py
from rest_framework import serializers
from .models import Branch, Employee

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class BranchSerializer(serializers.ModelSerializer):
    employees = EmployeeSerializer(many=True, read_only=True)
    manager = serializers.PrimaryKeyRelatedField(queryset=Employee.objects.all(), required=False)

    class Meta:
        model = Branch
        fields = '__all__'
