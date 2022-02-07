package org.jeecg.modules.trylearn.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.common.api.vo.Result;
import org.jeecg.common.system.api.ISysBaseAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *
 */
@Slf4j
@RestController
@RequestMapping("/try/common")
@CrossOrigin(origins = "*")
@Api(tags = "运行接口")
public class TryCommonController {

    @Autowired
    private ISysBaseAPI sysBaseAPI;

    /**
     * @return
     * @Author 政辉
     */
    @GetMapping("/403")
    public Result<?> noauth() {
        return Result.error("没有权限，请联系管理员授权");
    }

    /**
     * @return
     */
    @PostMapping(value = "/run")
    @ApiOperation("运行java")
    public Result<JavaCompilerResult> run(@RequestBody JavaModel javaModel) {
        Result<JavaCompilerResult> result = new Result<>();
        JavaCompilerResult javaCompilerResult = new JavaCompilerResult();
        try {
            String code = javaModel.getCode();
            CustomStringJavaCompiler compiler = new CustomStringJavaCompiler(code);
            boolean res = compiler.compiler();
            if (res) {
                javaCompilerResult.setCompilerTakeTime(compiler.getCompilerTakeTime());
                try {
                    compiler.runMainMethod();
                    javaCompilerResult.setRunTakeTime(compiler.getRunTakeTime());
                } catch (Exception e) {
                    e.printStackTrace();
                }
                javaCompilerResult.setSuccess(true);
                javaCompilerResult.setOut(compiler.getRunResult());
                javaCompilerResult.setCompilerMessage(compiler.getCompilerMessage());
            } else {
                javaCompilerResult.setSuccess(false);
                javaCompilerResult.setCompilerMessage(compiler.getCompilerMessage());
            }
            result.setResult(javaCompilerResult);
            return result;
        } catch (Exception e) {
            return result;
        }
    }
}
