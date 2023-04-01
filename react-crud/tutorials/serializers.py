from rest_framework import serializers 
from tutorials.models import Tutorial
 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published',
                  'gratitude',
                  'priority',
                  'todo1',
                  'todo2',
                  'todo3',
                  'pomo1',
                  'pomo2',
                  'pomo3',
                  'pomo4',
                  'pomo5')
