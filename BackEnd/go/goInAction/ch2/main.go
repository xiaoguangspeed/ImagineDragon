package main
import(
	"fmt"
	"log"
	"os"
)
func init(){
	fmt.Println("in func init")
}
var p0 *int
func main(){
	log.SetOutput(os.Stdout)
	fmt.Println("in func main")

	// 指针被初始化为nil
	fmt.Printf("nil pointer %x\n",p0)
	fmt.Println( p0 == nil)
}