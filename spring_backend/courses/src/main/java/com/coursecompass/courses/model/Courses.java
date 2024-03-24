package com.coursecompass.courses.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="co_courses")
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long  cid;
   private String coursename;
   private String duration;
   private String category;
   private String provider;
}
