package com.seaboxdata.web.module.consume;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.seaboxdata.core.base.BaseController;

/**
 * Created by cc on 2018/7/31.
 */
@Controller
@RequestMapping("/consume")
public class ConsumeController  extends BaseController {

		/**
	//   * 消费--电力
	//   */
	@RequestMapping(value = "/consume/elec")
	  public String elec(){
	      return "module/consume/elec";
	  }
	
	/**
	//   * 消费--石油
	//   */
	@RequestMapping(value = "/consume/oil")
	  public String oil(){
	      return "module/consume/oil";
	  }
	
	/**
	//   * 消费--天然气
	//   */
	@RequestMapping(value = "/consume/gas")
	  public String gas(){
	      return "module/consume/gas";
	  }
}
