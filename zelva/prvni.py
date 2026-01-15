from turtle import forward, left, exitonclick, right
import random
from math import sqrt

def domecek(a):
    c = sqrt(2*(a**2))
    forward(a)
    left(135)
    forward(c)
    left(135)
    forward(a)
    left(135)
    forward(c)
    left(135)
    forward(a)
    right(135)
    forward(c/2)
    right(90)
    forward(c/2)
    right(45)
    forward(a)

for i in range(7):
    domecek(random.randint(10, 18))
    left(36)

exitonclick()