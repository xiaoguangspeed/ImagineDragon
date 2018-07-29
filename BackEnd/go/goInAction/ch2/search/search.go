package search
import(
	"log"
	"sync"
)
// 包级变量
var matchers = make(map[string]Matcher)

func Run(searchTerm string){
	feeds, err := RetrieveFeeds()
		if err != nil{
			log.Fatal(err)
		}
	results := make(chan *Result)	
	var waitGroup sync.WaitGroup
	waitGroup.Add(len(feeds))
	 // 为每个数据源启动一个 goroutine 来查找结果
		for _, feed := range feeds {
			// 获取一个匹配器用于查找
			matcher, exists := matchers[feed.Type]
			if !exists {
			matcher = matchers["default"]
			}

			// 启动一个 goroutine 来执行搜索
			go func(matcher Matcher, feed *Feed) {
			Match(matcher, feed, searchTerm, results)
			waitGroup.Done()
			}(matcher, feed)
		}

		// 启动一个 goroutine 来监控是否所有的工作都做完了
		go func() {
		// 等候所有任务完成
		waitGroup.Wait()

		// 用关闭通道的方式，通知 Display 函数
		// 可以退出程序了
		close(results)
		}()

		// 启动函数，显示返回的结果，并且
		// 在最后一个结果显示完后返回
		Display(results)
}