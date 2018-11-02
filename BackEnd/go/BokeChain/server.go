package main

import (
	"net/http"
	"github.com/labstack/echo"
)

func getUser(c echo.Context) error{
	id := c.Param("id")
	return c.String(http.StatusOK,id)
}

func main(){
	e := echo.New()
	e.GET("/",func(c echo.Context) error{
		return c.String(http.StatusOK,"hello world")
	})
	// e.POST("/users",saveUser)
	e.GET("/users/:id",getUser)
	// e.PUT("/users/:id",updateUser)
	// e.DELETE("/users/:id",deleteUser)
	e.Logger.Fatal(e.Start(":1323"))



}

