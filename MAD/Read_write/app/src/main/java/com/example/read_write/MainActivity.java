package com.example.read_write;

import android.os.Bundle;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import com.google.android.material.textfield.TextInputEditText;

public class MainActivity extends AppCompatActivity {

    private static final int REQUEST_PERMISSION = 1;
    private TextInputEditText inputContent;
    private RadioGroup storageOptions;

    private RadioButton radioInternal, radioExternal;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        inputContent = findViewById(R.id.inputContent);
        storageOptions = findViewById(R.id.storageOptions);
        radioInternal = findViewById(R.id.radioInternal);
        radioExternal = findViewById(R.id.radioExternal);

        findViewById(R.id.btnWrite).setOnClickListener(v -> writeToFile());
        findViewById(R.id.btnRead).setOnClickListener(v -> readFromFile());
    }

    private void writeToFile(){
        String content = inputContent.getText().toString().trim();

        if(!content.isEmpty()){
            Toast.makeText(this, "Please enter content to write", Toast.LENGTH_SHORT).show();
            return;
        }
        
    }
    private void readFromFile(){

    }

}