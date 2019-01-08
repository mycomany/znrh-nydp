package com.seaboxdata;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.Bean;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.text.SimpleDateFormat;
import java.util.Date;


@SpringBootApplication
public class Application {
    /**
     * SrpingBoot启动方式 1 ：启动这个main
     *                   2 ：maven编译完了之后 通过cmd去项目目录下  mvn spring-boor:run
     *                   3  ： 打jar  jar在target目录下
     *                          java -jar <jar包name>
     * @param args
     */
    public static void main(String[] args) {
        logger.debug("springBoot容器启动"+
                new SimpleDateFormat("yyyymmdd-HH:MM:SS").format(new Date()));
        SpringApplication.run(Application.class, args);
    }

    private static Log logger = LogFactory.getLog(Application.class);

    @Bean
    protected ServletContextListener listener() {
        return new ServletContextListener() {

            @Override
            public void contextInitialized(ServletContextEvent servletContextEvent) {
                logger.info("ServletContext initialized");
            }

            @Override
            public void contextDestroyed(ServletContextEvent sce) {
                logger.info("ServletContext destroyed");
            }

        };
    }
}
