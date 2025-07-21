package models

import (
	"gorm.io/gorm"
)


type User struct {
	gorm.Model
	UserName string `json:"username"`
	Email string `gorm:"type:varchar(100);unique" json:"email"`
	HashedPassword string `gorm:"type:varchar(100)" json:"password"`
	Chats []PersonalChat `json:"chats"`
	Groups []Group `json:"groups"`
}