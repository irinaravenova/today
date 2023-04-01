# Generated by Django 4.1.3 on 2022-12-23 21:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tutorials', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='gratitude',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pomo1',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pomo2',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pomo3',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pomo4',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='pomo5',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='priority',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='todo1',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='todo2',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='tutorial',
            name='todo3',
            field=models.CharField(default='', max_length=50),
        ),
    ]