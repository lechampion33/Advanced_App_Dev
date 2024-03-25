package com.coursecompass.courses.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="co_favs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Favs {
 private String coursename;
 private String duration;
}
