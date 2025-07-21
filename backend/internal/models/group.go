package models

import (
	"gorm.io/gorm"
)


type Group struct {
	gorm.Model
	GroupName string `gorm:"type:varchar(100)" json:"group_name"`
	Description string `gorm:"type:varchar(100)" json:"description"`
	Admin User `json:"admin"`
	Creator User `json:"creator"`
	Members []GroupMember `json:"members"`
	Messages []Message `json:"messages"`
}