Hello, and welcome to **__Today__**!

###### Why Today?

> As a certified productivity and motivational junkie, I've kept up with all the fun, new and effective innovations in the self-help and lifestyle planning space. I've created this app to bring together my favorite techniques into one simple, streamlined, and beautiful space. Inspired by various entrepreneurs, motivational speakers and psychology experts, I hope that this will be a useful tool that people look forward to using not just Today, but every day.


#### Let's get into the project.

I started off this project with lots of research and planning. I knew I wanted to use React and Javascript as they are popular technologies, but I wasn't sure exactly *how* to use them. I needed a backend for my database and frontend for aesthetics. One thing was for sure, the project needed to beautiful and pleasant to use. Utility is great, but beauty is a lot easier on the eyes. Here is the original draft I designed using **Affinity Designer** for iPad:

![Today App](https://user-images.githubusercontent.com/96015952/210155083-e49c12ec-7ee0-40bd-8be8-e35af60ddfa6.jpg)

I must admit, this was one of my favorite parts of creating the project. While it doesn't quite look like this *yet*, I guarantee it will soon!

After discussing my goal with my mentor, he kindly sent a fantastic [tutorial](https://www.bezkoder.com/django-react-axios-rest-framework/) my way which ended up being exactly what I needed.

# Key Elements

The application needed to have **create, retrieve, update, & delete** functionality, best known as **CRUD**. This is really the most important part, everything else is really a "nice to have." I used a Django REST framework for this. As I will add user login capabilities moving forward, Django will also provide me with efficient user validation.

## Defining the Model and Views

I built on top of the tutorial model and added the relevant fields:

```
class Tutorial(models.Model):
    title = models.DateField(max_length=70, blank=True, default='')
    description = models.CharField(max_length=200,blank=True, default='')
    published = models.BooleanField(default=False)
    gratitude = models.CharField(max_length=200,blank=True, default='')
    priority = models.CharField(max_length=50,blank=True, default='')
    todo1 = models.CharField(max_length=50,blank=True, default='')
    todo2 = models.CharField(max_length=50,blank=True, default='')
    todo3 = models.CharField(max_length=50,blank=True, default='')
    pomo1 = models.BooleanField(default=False)
    pomo2 = models.BooleanField(default=False)
    pomo3 = models.BooleanField(default=False)
    pomo4 = models.BooleanField(default=False)
    pomo5 = models.BooleanField(default=False)
```

And migrated it to the database (PostgreSQL). You will see title customized as a date format, and "pomos" will be checkboxes for users to track their task progress using boolean fields.

Then, came defining the api views that will perform the CRUD operations:

```
@api_view(['GET', 'POST', 'DELETE'])
def tutorial_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
    if request.method == 'GET':
        tutorials = Tutorial.objects.all()

        title = request.GET.get('title', None)
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title)

        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    # Creates and saves a new Tutorial:
    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        tutorial_serializer = TutorialSerializer(data=tutorial_data)
        if tutorial_serializer.is_valid():
            tutorial_serializer.save()
            return JsonResponse(tutorial_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

Data is parsed and serialized.

![djangorestimg](https://user-images.githubusercontent.com/96015952/210155484-583407e0-4509-4871-bff7-c667b547d73a.png)

Also, shoutout to the application **Postman** for helping me see exactly what's going on with the backend when playing with data. Very useful!

## Defining the Frontend with React

Boy, was learning about states another learning curve! I ended up watching probably almost an entire other course's worth of material to start wrapping my head around how React works.

![React Interaction](https://www.bezkoder.com/wp-content/uploads/2020/03/react-crud-example-web-api-components.png)

 > Here I started getting the even more fun parts and styling. The way I understand it, each React route is a component that stores state information and renders visual elements. We are manipulating state, so the visual elements change when the state changes. I was already familiar with event handlers and such with Javascript, so I got the jist of that pretty quickly. Still, there was nuance to be experienced.

I needed each new day's form to automatically populate the title field in a way that Axios would be happy with:

```

    this.state = {
      id: null,
      title: `${new Date().getFullYear()}-${(new Date().getMonth()+ 1)}-${new Date().getDate()}`,
      description: "",
      published: false,
      gratitude: "",
      priority: "",
      todo1: "",
      todo2: "",
      todo3: "",
      pomo1: false,
      pomo2: false,
      pomo3: false,
      pomo4: false,
      pomo5: false,

      submitted: false
    };
```

For a few days, I thought HTML checkbox input was giving me the Axios submission error, but it turns out I was placing the date formatting in the HTML text field input rather than state. You can imagine the sense of wonderment when I discovered the blunder.

The event handler for when a pomodoro box is checked was an easy change to *e.target.checked* instead of *e.target.value* like the other input fields. Boolean was the right choice!

```
  onChangePomo1(e) {
    this.setState({
      pomo1: e.target.checked
    });
    console.log(e.target.checked)
}
```

Once the basics were covered and the application more or less functional, I made it prettier. It's starting to look a lot closer to where I really want it to be. That being said, I am very happy with where it is right now.

<img width="1232" alt="Screen Shot 2022-12-31 at 4 10 38 PM" src="https://user-images.githubusercontent.com/96015952/210155709-5c2d3f2b-100f-473a-8d99-4884916606ae.png">

The homepage automatically populates the date field in the correct format and is readOnly. 

<img width="1228" alt="Screen Shot 2022-12-31 at 4 12 29 PM" src="https://user-images.githubusercontent.com/96015952/210155717-8361c31f-52ee-473c-9c9b-3f9d385976da.png">

And then later on, you can review and make some edits to past entries. 
