# 二、生成模式（Generating Patterns）
# 确定性模式（Deterministic Patterns） 非确定性模式（Non-deterministic patterns）
# 一种做法是假设模型的当前状态仅仅依赖于前面的几个状态，这被称为马尔科夫假设
# 一个马尔科夫过程是状态间的转移仅依赖于前n个状态的过程。这个过程被称之为n阶马尔科夫模型，其中n是影响下一个状态选择的（前）n个状态。
# 　　现在我们定义一个一阶马尔科夫过程如下：
# 　　　状态：三个状态——晴天，多云，雨天。
# 　　　pi向量：定义系统初始化时每一个状态的概率。
# 　　　状态转移矩阵：给定前一天天气情况下的当前天气概率。
# 　　任何一个可以用这种方式描述的系统都是一个马尔科夫过程。
# 隐马尔科夫模型（Hidden Markov Models）  隐藏模型
# 一个观察序列与一个底层马尔科夫过程是概率相关的
# 定义（Definition of a hidden Markov model）
# 　　一个隐马尔科夫模型是一个三元组（pi, A, B）。
# 　　Triple_PI：初始化概率向量；
# 　　Triple_A：状态转移矩阵；Triple_A_2
# 　　Triple_B：混淆矩阵；Triple_B_2
# 　　在状态转移矩阵及混淆矩阵中的每一个概率都是时间无关的——也就是说，当系统演化时这些矩阵并不随时间改变。实际上，这是马尔科夫模型关于真实世界最不现实的一个假设。
　一旦一个系统可以作为HMM被描述，就可以用来解决三个基本问题。其中前两个是模式识别的问题：
  给定HMM求一个观察序列的概率（评估）；搜索最有可能生成一个观察序列的隐藏状态序列（解码）。第三个问题是给定观察序列生成一个HMM（学习）。
  Viterbi 算法（Viterbi algorithm）
  