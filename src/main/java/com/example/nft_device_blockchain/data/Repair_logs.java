package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "repair_logs")
public class Repair_logs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "repair_id")
    private int repair_id;

    @Column(name = "device_id")
    private int device_id;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String description;

    @Column(name = "center_name")
    private String center_name;

    @ManyToOne
    @JoinColumn(name = "added_by", referencedColumnName = "user_id")
    private Users added_by;

    public int getRepair_id() {
        return repair_id;
    }

    public void setRepair_id(int repair_id) {
        this.repair_id = repair_id;
    }

    public int getDevice_id() {
        return device_id;
    }

    public void setDevice_id(int device_id) {
        this.device_id = device_id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCenter_name() {
        return center_name;
    }

    public void setCenter_name(String center_name) {
        this.center_name = center_name;
    }

    public Users getAdded_by() {
        return added_by;
    }

    public void setAdded_by(Users added_by) {
        this.added_by = added_by;
    }
}
