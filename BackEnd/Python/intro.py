# 专注于算法思维和程序设计的主要技能
def main():
    print("chaos of the magic world")
    x = eval(input("请输入一个0到1的数"))
    y = eval(input("请输入一个0到1的数"))
    print("input ",x,y)
    print("___________________")
    #固定小数位打印数字
    for i in range(10):
        x = 3.9 * x * (1-x)
        y = 3.9 * y * (1-y)
        print(x,y)
main()        
# 混沌对计算机科学有重要的影响，它有两个特性：显然的不可预测性和对初始值的极度敏感
# 计算机可能由于程序错误而给出不正确的结果，但如果模型错误或初始输入不够精确，即使正确的程序也可能产生错误的结果。