package main

import (
	"golang.org/x/tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	m := make(map[string]int)
	stmp := strings.Fields(s)
	for _,ele := range(stmp){
		if m[ele] > 0 {
			m[ele] = m[ele] +1
		}else {
 			m[ele] = 1

		}
	}
	return m
}

func main() {
	wc.Test(WordCount)
}