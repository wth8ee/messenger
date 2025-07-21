package models

import (
	"gorm.io/gorm"
)


type Message struct {
	gorm.Model
	ChatID uint `json:"chat_id"`
	Sender User `json:"sender"`
	Text string `gorm:"type:varchar(200)" json:"email"`
}