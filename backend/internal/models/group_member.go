package models

import (
	"gorm.io/gorm"
	"time"
)


type GroupMember struct {
	gorm.Model
	Userr User `json:"user"`
	GroupId uint `json:"group_id"`
	IsAdmin bool `json:"is_admin"`
	IsCreator bool `json:"is_creator"`
	JoinedAt time.Time `json:"joined_at"`
}