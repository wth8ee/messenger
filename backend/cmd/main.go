package main

import (
	"gorm.io/driver/postgres"
    "gorm.io/gorm"
	"net/http"
	"github.com/gin-gonic/gin"
	"fmt"
	"messenger/internal/models"
	"messenger/internal/controllers"
)


func setUpDb() (*gorm.DB, error){
	dsn := "host=localhost user=postgres password=post123 port=5432 sslmode=disable"
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        return db, err
    }
	db.AutoMigrate(&models.Group{}, &models.GroupMember{}, &models.Message{}, &models.User{}, &models.PersonalChat{})
	return db, nil
}



func main() {
	db, err := setUpDb()
	if err != nil {
		fmt.Println("CONNECTION ERROR TO DBBB ASS")
		return
	} else {
		fmt.Println("SUCCESSFULLY CONNECTED TO DB")
	}
	router := gin.Default()

	userHandlers := controllers.UserHandler{DB: db}
	router.POST("/register", userHandlers.Register)
	http.ListenAndServe(":8080", router)
}