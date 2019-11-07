from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
import random


# Create your views here.


def index(request):
    images = [
        '/static/images/dice1@3x.png',
        '/static/images/dice2@3x.png',
        '/static/images/dice3@3x.png',
        '/static/images/dice4@3x.png',
        '/static/images/dice5@3x.png',
        '/static/images/dice6@3x.png',
    ]

    first_img = random.choice(images)
    second_img = random.choice(images)

    # mydict = {
    #     'f': first_img,
    #     's': second_img,
    # }

    return render(request, 'app/index.html', {'f': first_img, 's': second_img})
