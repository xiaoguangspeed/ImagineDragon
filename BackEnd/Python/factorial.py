def factorial():
    n = int(input("请输入一个数字: "))
    fact = n
    for i in range(n-1,1,-1):
        fact = fact * i

    print("the factorial of ",n ,'is',fact)
factorial()    