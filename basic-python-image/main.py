min_number = float(input("Please enter the min length: "))
max_number = float(input("Please enter the max length: "))

if(min_number < max_number):
    print("Your result is {}".format(min_number + max_number))
else:
    print("Min length cannot greater than max length")
