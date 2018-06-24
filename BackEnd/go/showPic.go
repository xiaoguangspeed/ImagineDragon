package main
import(
	// "fmt"
)
import "golang.org/x/tour/pic"

func Pic(dx, dy int) [][]uint8 {
	var res [][]uint8 
	for i:=0;i<dy;i++ {
		var tmp = make([]uint8,dx)
		for j:=0;j<dx;j++ {
			tmp[j] = uint8(i*j)
		}
		res = append(res,tmp)
	}
	return res
}

func main() {
	pic.Show(Pic)
	// fmt.Println(Pic(3,4))

}