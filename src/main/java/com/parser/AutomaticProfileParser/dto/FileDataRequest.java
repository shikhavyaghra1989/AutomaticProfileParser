package com.parser.AutomaticProfileParser.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.web.multipart.MultipartFile;
@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class FileDataRequest {
    private int applicantId;
    private MultipartFile file;

}
