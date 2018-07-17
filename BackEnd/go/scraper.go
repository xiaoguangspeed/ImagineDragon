package main
import(
	"fmt"
	"time"
	"reflect"
)
func main(){
	fmt.Println(time.Now().Date())
	fmt.Println(reflect.TypeOf(time.Now())) //time.Time
}