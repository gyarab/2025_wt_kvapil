from turtle import forward, left, exitonclick, right
import random
from math import sqrt

def domecek(a):
    c = sqrt(2*(a**2))
    forward(a)
    left(90)
    forward(a)
    left(90)
    forward(a)
    left(90)
    forward(a)
    left(90)
    forward(a)

#for i in range(6):
#    domecek(50*i)

for i in range(11):
    domecek(random.randint(10, 20))
    right(36)

exitonclick()