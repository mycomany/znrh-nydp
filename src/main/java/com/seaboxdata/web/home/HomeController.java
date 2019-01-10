package com.seaboxdata.web.home;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by cc on 2018/7/31.
 */
@Controller
@Scope("prototype")
public class HomeController {

    /**
     * 首页
     * @return
     */
    @RequestMapping(value = "/")
    public String index(){
        return "redirect:module/pattern/index";
    }

    /**
     * 分屏页面
     * @param module
     * @param url
     * @return
     */
    @RequestMapping("/module/{module}/{url}")
    public String module(@PathVariable("module") String module, @PathVariable("url") String url, HttpServletRequest request, ModelMap map){
        String host = request.getScheme() + "://" + request.getServerName()
                + ":" + request.getServerPort() + request.getContextPath();

        map.addAttribute("host", host);
        return "/module/" + module + "/" + url;
    }

    @RequestMapping("/energy/{type}/{url}")
    public String energyModule(@PathVariable("type") String type, @PathVariable("url") String url, HttpServletRequest request, ModelMap map){
        String host = request.getScheme() + "://" + request.getServerName()
                + ":" + request.getServerPort() + request.getContextPath();

        map.addAttribute("host", host);
        return "/energy/" + type + "/" + type + "_" + url;
    }
}
