# == Schema Information
#
# Table name: projects
#
#  id                :integer          not null, primary key
#  title             :string(255)
#  date              :string(255)
#  program           :string(255)
#  description       :text
#  image             :string(255)
#  image_description :text             default([]), is an Array
#  day_id            :integer
#  week_id           :integer
#  created_at        :datetime
#  updated_at        :datetime
#

class Project < ActiveRecord::Base
  belongs_to :day
end
