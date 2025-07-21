package models

import (
	"gorm.io/gorm"
)


type PersonalChat struct {
	gorm.Model
	User1 User `json:"user1"`
	User2 User `json:"user2"`
	Messages []Message `json:"messages"`
}