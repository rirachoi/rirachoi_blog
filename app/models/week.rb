# == Schema Information
#
# Table name: weeks
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  study      :string(255)      default([]), is an Array
#  created_at :datetime
#  updated_at :datetime
#

class Week < ActiveRecord::Base
  has_many :projects
end
