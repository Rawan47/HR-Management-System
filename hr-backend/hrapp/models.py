# models.py
from django.db import models

class Branch(models.Model):
    name = models.CharField(max_length=255)
    building_number = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    area = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    manager = models.ForeignKey('Employee', null=True, blank=True, on_delete=models.SET_NULL, related_name='managed_branches')

    def __str__(self):
        return self.name

class Employee(models.Model):
    name = models.CharField(max_length=255)
    age = models.IntegerField()
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    branch = models.ForeignKey('Branch', on_delete=models.CASCADE, related_name='employees')

    def __str__(self):
        return self.name
