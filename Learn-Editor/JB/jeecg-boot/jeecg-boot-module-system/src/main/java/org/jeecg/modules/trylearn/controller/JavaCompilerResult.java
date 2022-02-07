package org.jeecg.modules.trylearn.controller;

import lombok.Data;

@Data
public class JavaCompilerResult {
    private long compilerTakeTime;
    private long runTakeTime;
    private boolean success;
    private String compilerMessage;
    private String out;
}
