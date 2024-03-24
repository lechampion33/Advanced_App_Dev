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
@Table(name="co_enquires")
public class Enquires {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long eid;
    private String querie;
    private String username;
    private String date;
    private String information;
}
