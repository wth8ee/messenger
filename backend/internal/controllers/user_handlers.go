package controllers

import (
	"gorm.io/gorm"
	"messenger/internal/models"
	"net/http"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)


type UserHandler struct {
	DB *gorm.DB
}


type UserInput struct {
	UserName string `json:"username"`
	Email string `json:"email"`
	Password string `json:"password"`
}


func (u *UserHandler) Register(c *gin.Context) {
	var userInput UserInput 
	if err := c.ShouldBind(&userInput); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input data"})
		return
	}

	var existingUser models.User
	if err := u.DB.Where("email = ?", userInput.Email).First(&existingUser).Error; err == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user already exists"})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userInput.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not hash password"})
		return
	}

	user := models.User{UserName: userInput.UserName, Email: userInput.Email, HashedPassword: string(hashedPassword)}
	if err := u.DB.Create(&user).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create an account"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "success", "user": user})
}
