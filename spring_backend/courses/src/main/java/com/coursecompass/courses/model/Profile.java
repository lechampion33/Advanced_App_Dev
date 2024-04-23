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
@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
@Table(name="co_profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private long pid;
    private String username;
    private String country;
    private String mobile;
}
