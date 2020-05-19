# views.py
from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework.views import APIView 
from rest_framework import status 
from .serializers import JournalSerializer 
from .models import Journal
 
# Create your views here.
class CreateJournalView(APIView): 
    def post(self, request): 
        journal_serializer = JournalSerializer(data=request.data)
        if journal_serializer.is_valid():
            journal_serializer.save()
            return Response(journal_serializer.data, status=status.HTTP_200_OK)
  
