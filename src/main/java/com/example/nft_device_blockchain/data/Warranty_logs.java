package com.example.nft_device_blockchain.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "warranty_logs")
public class Warranty_logs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "warranty_id")
    private int warranty_id;

    @Column(name = "start_date")
    private Date start_date;

    @Column(name = "end_date")
    private Date end_date;

    @ManyToOne
    @JoinColumn(name = "added_by", referencedColumnName = "user_id")
    private Users added_by;

    @Column(name = "notes")
    private String notes;

    public int getWarranty_id() {
        return warranty_id;
    }

    public void setWarranty_id(int warranty_id) {
        this.warranty_id = warranty_id;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Users getAdded_by() {
        return added_by;
    }

    public void setAdded_by(Users added_by) {
        this.added_by = added_by;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
