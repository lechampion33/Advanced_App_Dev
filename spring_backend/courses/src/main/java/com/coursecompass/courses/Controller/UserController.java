package com.coursecompass.courses.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.coursecompass.courses.Services.implication.UserServiceImpl;
import com.coursecompass.courses.model.User;
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired 
   private UserServiceImpl usi;
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User newUser) {
        User createdUser = usi.addUser(newUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = usi.getAllUsers();
        return ResponseEntity.ok(users);
    }
    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = usi.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
     @PutMapping("/putUser")
     public User putUser(@RequestParam long uid, @RequestBody User user) {
      user.setUid(uid);
      return usi.putUsers(user);
  }
  @DeleteMapping("/deleteUser")
  public String deleteUser(@RequestParam long uid){
    usi.deleteUser(uid);
    return "Deleted Succesfully";
  }
}
