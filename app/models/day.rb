# == Schema Information
#
# Table name: days
#
#  id             :integer          not null, primary key
#  name           :string(255)
#  today_i_learnt :string(255)      default([]), is an Array
#  images         :string(255)
#  week_id        :integer
#  created_at     :datetime
#  updated_at     :datetime
#

class Day < ActiveRecord::Base
  belongs_to :week
  has_many :projects
  has_many :homeworks
end



